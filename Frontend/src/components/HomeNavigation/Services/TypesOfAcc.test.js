import '@testing-library/jest-dom'
import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import LabTabs from './TypesOfAcc';

jest.mock("react-router-dom", () => ({
    useNavigate: () => {}
}));


it('should render know more', async() => {
    const wrapper = render( <LabTabs /> );
    const linkElement = await wrapper.findAllByText("Know more");
    expect(linkElement[0]).toBeInTheDocument();
});
