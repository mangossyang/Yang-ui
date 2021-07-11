
import React from 'react'
import {render} from '@testing-library/react'
import Button from './button'


describe('test button component', () => {
    it('should render the correct default button',() => {
        const wrapper = render(<Button>Nice</Button>)
        const el = wrapper.getByText('Nice')
        expect(el).toBeInTheDocument()
        expect(el.tagName).toEqual('BUTTON')
        expect(el).toHaveClass('btn btn-default')
    })
})