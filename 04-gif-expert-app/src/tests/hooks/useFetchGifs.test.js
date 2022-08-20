import React, { useState } from "react";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('Pruebas en useFetchGifs()', () => {
  
    test('Debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Dragon Ball") ); 

        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });     

    test('Debe retornar un arreglo de imagenes y loading = false', async () => {
      
        const { result , waitForNextUpdate} = renderHook(() => useFetchGifs("Dragon Ball")); 

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(5);
        expect(loading).toBe(false);

    });
    
    
})
