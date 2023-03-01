import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react"
import Home from "./Home";
import GoogleTranslate from "./GoogleTranslate";
import ImageChange from "./HomeFeed";
import LatestOffers from "./LatestOffers";
import { FooterContainer } from "./footer1"; 
import '@testing-library/jest-dom'

jest.mock("react-router-dom", () => ({
    useNavigate: () => {}
}));


it('should render GoogleTranslator', async () => {
    const wrapper = shallow(<Home />);
    const googleTranslate = wrapper.find(GoogleTranslate);
    expect (googleTranslate.exists()).toBe(true);
});

it('should render ImageChanger', () => {
    const wrapper = shallow(<Home />);
    const ImageChanger = wrapper.find(ImageChange);
    expect (ImageChanger.exists()).toBe(true);
});

it('should render LatestOffers', () => {
    const wrapper = shallow( <Home /> );
    const LatestOffer = wrapper.find(LatestOffers);
    expect (LatestOffer.exists()).toBe(true);
});

it('should render footer', () => {
    const wrapper = shallow( <Home /> );
    const footer = wrapper.find(FooterContainer);
    expect (footer.exists()).toBe(true);
});

it('should render know more', async() => {
    const wrapper = render( <Home /> );
    const linkElement = await wrapper.findAllByText("Know More");
    expect(linkElement[0]).toBeInTheDocument();
});