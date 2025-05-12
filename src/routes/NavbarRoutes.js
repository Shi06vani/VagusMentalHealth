import { Component } from "react";
import Home from "../pages/Home";
import SpecificDisorder from "../pages/SpecificDisorder";
import LifeAndWork from "../pages/LifeAndWork";
import Relationship from '../pages/Relationship';
import Therapist from '../pages/Therapist';
import Plans from '../pages/Plans';
import Business from '../pages/Business';
import AdviceRoom from '../pages/AdviceRoom';
import Login from '../pages/Login';


export const navbarRoutes = [
  {
    name: 'Specific Disorder',
    path: '/specific-disorder',
    Component: SpecificDisorder,
    hasDropdown: true, 
  },
  {
    name: 'Life and Work',
    path: '/life-and-work',
    Component: LifeAndWork,
    hasDropdown: true,
  },
  {
    name: 'Relationship',
    path: '/relationship',
    Component: Relationship,
    hasDropdown: true,
  },
  {
    name: 'Therapist',
    path: '/therapist',
    Component: Therapist,
  },
  {
    name: 'Plans',
    path: '/plans',
    Component: Plans,
  },
  {
    name: 'Business',
    path: '/business',
    Component: Business,
  },
  {
    name: 'The Advice Room',
    path: '/advice-room',
    Component: AdviceRoom,
  },
  {
    name: 'Login',
    path: '/login',
    Component: Login,
  },
];
