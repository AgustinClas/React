import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../hooks/useForm"

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Agustin',
        email: 'Agustin@google.com'
    }

    test('Debe regresar la informacion por defecto', () => {


        const { result } = renderHook(() => useForm(initialForm));

        console.log(result.current)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })

    })

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })

        expect(result.current.name).toEqual(newValue)
        expect(result.current.formState.name).toEqual(newValue)


    })

    test('Debe resetear el formulario', () => {

        const newValue = 'Juan';

        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm();
        })

        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toEqual(initialForm.name)


    })
})