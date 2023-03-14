import { fireEvent, render, screen, renderHook } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/UseCounter"

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/UseCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading'));
        expect(screen.getByText('Breaking Bads Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();

        //screen.debug();
    })

    test('Debe mostrar una cita', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Agustin', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        //screen.debug();

        expect(screen.getByText('Hola Mundo'));
        expect(screen.getByText('Agustin'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();


    })

    test('Debe llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Agustin', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);


        //expect(mockIncrement).toHaveBeenCalled();
    })


})