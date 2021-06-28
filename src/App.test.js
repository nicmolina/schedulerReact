/** Unit tests file using @testing-library/react
 */

import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

/**For Button component tests 
*/
import Button from './Components/Buttons/Button';

/**For NoneContent and Unauthorized tests */
import NoneContent from './Components/Common/Content/NoneContent';
import Unauthorized from './Pages/Interceptors/Unauthorized';

/**For Loading tests */
import Loading from './Components/Common/Loading/Loading';

/**For Input tests */
import InputField from './Components/Forms/InputField';

const ButtonProps = {
    label: 'button',
    text: 'Sign up',
    loading: false,
    handleAdd: () => {
    },
}

/** See if component Button used on sign in and on sign up is being correctly rendered
 *  Also see if component receive the props and if the prop loading is changing the icon
 *  Button needs to start with loading false and when changes the new icon with aria-label='loading-icon' needs to appear
*/
describe('Buttons component', () => {
    it('should start showing button', () => {
        const { rerender } = render(
            <Button
                text={ButtonProps.text}
                loading={false}
                onClick={() => handleAdd()} />
        );

        expect(screen.queryByLabelText(ButtonProps.label)).toBeInTheDocument();
        expect(screen.queryByLabelText(ButtonProps.label)).toHaveTextContent('Sign up');

        rerender(
            <Button text={ButtonProps.text}
                loading={true}
                onClick={() => handleAdd()} />
        )

        //checking if after loading change on useService hooks the icon for loading is rendered

        expect(screen.getByLabelText('loading-icon')).toBeInTheDocument();
    })
})

/** Check if NoneContent and Unauthorized components are being rendered since the start
 *  Also check if after the specific render of each one of them, they are with the correct texts and presents
 *  in the Document
*/

describe('NoneContent, Unauthorized and Header component', () => {
    it('should not start showing', () => {
        render(<App />);

        expect(screen.queryByLabelText('none-contentId')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('unauthorizedContainer')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('headerContainer')).not.toBeInTheDocument();
    
        render(
            <NoneContent />
        );

        render(
            <Unauthorized />
        );

        expect(screen.queryByText('Ops, looks like you dont have working hours registered on this day')).toBeInTheDocument();
        expect(screen.queryByText('You need to login to have access')).toBeInTheDocument();
    
    })
})

/** Check if loading prop(text) is being passed and if after the render
 *  loading is rendered correctly
 */

describe('Loading component', () => {
    it('see loading state and checking loading text being passed correctly', () => {
        expect(screen.queryByLabelText('loadingContainer')).not.toBeInTheDocument();

        render(<Loading text='Loading data...' />);

        expect(screen.queryByLabelText('loadingContainer')).toBeInTheDocument();
        expect(screen.queryByLabelText('loadingContainer')).toHaveTextContent('Loading data...');
    })
})

/** Check first about inputfield visibility, since it is used
 *  on the login page, and also if props can be passed, just like the prop : label
 *  Label is passed and checked with the toHaveTextContent()
 */

describe('InputField component', () => {
    it('Correctly render inputField with prop for login page', () => {

        render(<InputField
            aria-label='inputFieldContainer'
            label='emailTesting'
        />)

        expect(screen.queryByLabelText('inputFieldContainer')).toBeVisible();

        /** Testing label props
         *  checking if label is being passed by props testing if the string exists within the element
         */

        expect(screen.queryByLabelText('inputFieldContainer')).toHaveTextContent('emailTesting');
    })
})

