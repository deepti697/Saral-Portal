import { shallow } from "enzyme";
import React from "react";
import Navigation from "../../Navigation/Navigations";
import EmployeeLogin from "./EmployeeLogin";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

jest.mock("react-router-dom", () => ({
    useNavigate: () => {}
})); 


 it("EmployeeLogin to be rendered", () => {
    const component = shallow(<EmployeeLogin />)
    console.log(component.debug())
    expect(component).toMatchSnapshot()
});


it('should render Navigation', async () => {
    const wrapper = shallow(<EmployeeLogin />);
    const navigate = wrapper.find(Navigation);
    expect (navigate.exists()).toBe(true);
});

it('should render backicon', async () => {
    const wrapper = shallow(<EmployeeLogin />);
    const navigate = wrapper.find(ArrowBackIosNewTwoToneIcon);
    expect (navigate.exists()).toBe(true);
});

it('should render lockicon', async () => {
    const wrapper = shallow(<EmployeeLogin />);
    const navigate = wrapper.find(LockOutlinedIcon);
    expect (navigate.exists()).toBe(true);
});

it('should render submit button', async() => {
    const wrapper = render( <EmployeeLogin /> );
    const linkElement = await wrapper.findAllByText("Sign In");
    expect(linkElement[0]).toBeInTheDocument();
});

it('should render submit button', async() => {
    const wrapper = render( <EmployeeLogin /> );
    const linkElement = await wrapper.findAllByText("Home");
    expect(linkElement[0]).toBeInTheDocument();
});