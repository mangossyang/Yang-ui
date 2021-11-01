import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type animationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left'

interface TransitionProps {
    animation?: animationName,
    wrapper?: Boolean
}

const Transition: React.FC<TransitionProps & CSSTransitionProps> = props => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProp
    } = props

    return (
        <CSSTransition
            classNames={classNames ? classNames : animation} {...restProp}>
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    )

}

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
    timeout: 300,
    animation: 'zoom-in-top'
}

export default Transition