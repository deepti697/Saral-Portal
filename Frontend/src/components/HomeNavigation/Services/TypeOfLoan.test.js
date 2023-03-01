import LoanTabs from "./TypesOfLoan";
import '@testing-library/jest-dom'
import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { mount } from 'enzyme';
import Typography from "@mui/material/Typography";

jest.mock("react-router-dom", () => ({
    useNavigate: () => {}
}));

it('should render know more', async() => {
    const wrapper = render( <LoanTabs /> );
    const linkElement = await wrapper.findAllByText("Know more");
    expect(linkElement[0]).toBeInTheDocument();
});




// it('renders H1', () => {
//     const wrapper = render( <LoanTabs /> );
//     const typography =mount(<Typography variant="h5" />);
//     expect(typography.find('h5')).toEqual(true);
// });
