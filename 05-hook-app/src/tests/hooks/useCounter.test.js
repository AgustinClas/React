import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../hooks/UseCounter"

describe('Test on Use Counter', () => {

    test('Debe retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        const { counter, increment, decrement, reser } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));

    })

    test('Debe generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current;

        expect(counter).toBe(100);
    })

    test('Debe incrementar el contador', () => {

        const { result } = renderHook(() => useCounter());

        const { increment } = result.current;

        act(() => {
            increment();
        })

        expect(result.current.counter).toBe(11);
    })

    test('Debe decrementar el contador', () => {

        const { result } = renderHook(() => useCounter());

        const { decrement } = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(9);
    })

    test('Debe resetear el contador', () => {

        const { result } = renderHook(() => useCounter());

        const { increment, reset } = result.current;

        act(() => {
            increment(10);
            reset();
        })

        expect(result.current.counter).toBe(10);
    })
})