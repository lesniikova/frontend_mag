import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: any;
    let httpTestingController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, HttpClientTestingModule, CommonModule], // Use imports for standalone components
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should have title as "Tabela"', () => {
        expect(component.title).toBe('Tabela');
    });

    it('should set "podatki" with the data from API on successful fetch', () => {
        const mockData = [
            { id: 1, name: 'Test 1' },
            { id: 2, name: 'Test 2' },
        ];

        component.ngOnInit();

        const req = httpTestingController.expectOne('http://127.0.0.1:5000/table');
        expect(req.request.method).toBe('GET');

        req.flush(mockData);

        expect(component.podatki).toEqual(mockData);
        expect(component.loading).toBe(false); // Jest uses `false` instead of `false`
    });

    it('should set loading to false and log an error on API fetch failure', () => {
        // Jest's way of spying on console methods
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        component.ngOnInit();

        const req = httpTestingController.expectOne('http://127.0.0.1:5000/table');
        expect(req.request.method).toBe('GET');

        const errorEvent = new ErrorEvent('Network error');
        req.error(errorEvent);

        expect(component.podatki).toEqual([]);
        expect(component.loading).toBe(false);

        consoleErrorSpy.mockRestore(); // Restore original console.error behavior
    });
});
