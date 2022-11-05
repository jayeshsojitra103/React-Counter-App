import { render, screen, renderHook, act, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { useCounter } from './Hook/useCounter'


describe('Counter App Flow', () => {
  test('Click on start button', () => {
    render(<App />);
    const startButton = screen.getByText(/Start/i);

    userEvent.click(startButton);

    const pauseButton = screen.getByText(/Pause/i);

    expect(pauseButton).toBeInTheDocument();

  });

  test('Click on Pause button', () => {
    render(<App />);
    const startButton = screen.getByText(/Start/i);
    const resetButton = screen.getByText(/Reset/i);

    expect(startButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();

    userEvent.click(startButton);

    const pauseButton = screen.getByText(/Pause/i);

    expect(pauseButton).toBeInTheDocument();

    expect(startButton).not.toBeInvalid();

  });

  test('should use counter', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(0)
    expect(typeof result.current.onStartCounterClick).toBe('function');
    expect(typeof result.current.onPauseCounterClick).toBe('function');
    expect(typeof result.current.resetCount).toBe('function');
  })

  test('should increment counter', async () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.onStartCounterClick();
    })
  

  })

  test('should pause counter', async () => {
    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.onPauseCounterClick();
    })
   })
  test('should reset counter to updated initial value', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.resetCount()
    })
    expect(result.current.counter).toBe(0)
  })

})