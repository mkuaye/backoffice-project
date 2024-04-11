import { ComponentProps } from 'react';

interface Input extends ComponentProps<'input'> {}

export function Input({ ...props }: Input) {
  return (
    <input
      {...props}
      className='border-radius w-10'
    />
  );
}
