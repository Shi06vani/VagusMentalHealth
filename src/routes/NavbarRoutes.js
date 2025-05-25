import { Component } from "react";
import Home from "../pages/Home";
import SpecificDisorder from "../pages/SpecificDisorder";
import Therapist from "../pages/Therapist";
import Plans from "../pages/Plans";
import Business from "../pages/Business";
import AdviceRoom from "../pages/AdviceRoom";
import Login from "../pages/Login";
import CouplesCounselling from "../pages/relationship/CouplesCounselling";
import DivorceCounselling from "../pages/relationship/DivorceCounselling";
import FamilyCounselling from "../pages/relationship/FamilyCounselling";
import InfertilityCounselling from "../pages/relationship/InfertilityCounselling";
import SexualIntimacy from "../pages/relationship/SexualIntimacy";
import CrisisIntervention from "../pages/life-and-work/CrisisIntervention";
import LandWExistential from "../pages/life-and-work/LandWExistential";
import Trauma from "../pages/life-and-work/Trauma";
import SuicidalTendencies from "../pages/life-and-work/SuicidalTendencies";
import ChronicIllness from "../pages/life-and-work/ChronicIllness";
import Burnout from "../pages/life-and-work/Burnout";
import BoostingProductivity from "../pages/life-and-work/BoostingProductivity";
import CareerCoaching from "../pages/life-and-work/CareerCoaching";
import Depression from "../pages/specific-disorder/Depression";
import EatingDisorder from "../pages/specific-disorder/EatingDisorder";

export const navbarRoutes = [
  {
    name: "Specific Disorder",
    path: "/specific-disorder/depression",
    Component: Depression,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/eating-disorder",
    Component: EatingDisorder,
  },

  {
    name: "Life and Work",
    path: "/life-and-work/crisis-intervention",
    Component: CrisisIntervention,
  },

  {
    name: "Life and Work",
    path: "/life-and-work/existential-crisis",
    Component: LandWExistential,
  },
  {
    name: "Life and Work",
    path: "/life-and-work/trauma",
    Component: Trauma,
  },
  {
    name: "Life and Work",
    path: "/life-and-work/chronic-illness",
    Component: ChronicIllness,
  },
  {
    name: "Life and Work",
    path: "/life-and-work/suicidal-tendencies",
    Component: SuicidalTendencies,
  },
  {
    name: "Life and Work",
    path: "/life-and-work/Burnout",
    Component: Burnout,
  },
  {
    name: "Life and Work",
    path: "/life-and-work/boosting-productivity",
    Component: BoostingProductivity,
  },

  {
    name: "Life and Work",
    path: "/life-and-work/career-coaching",
    Component: CareerCoaching,
  },

  // {
  //   name: 'Relationship',
  //   path: '/relationship',
  //   Component: Relationship,
  //   hasDropdown: true,
  // },
  {
    name: "Relationship",
    path: "/relationship/couples-counselling",
    Component: CouplesCounselling,
    hasDropdown: true,
  },
  {
    name: "Relationship",
    path: "/relationship/divorce-counselling",
    Component: DivorceCounselling,
    hasDropdown: true,
  },
  {
    name: "Relationship",
    path: "/relationship/family-counselling",
    Component: FamilyCounselling,
    hasDropdown: true,
  },
  {
    name: "Relationship",
    path: "/relationship/infertility-counselling",
    Component: InfertilityCounselling,
    hasDropdown: true,
  },
  {
    name: "Relationship",
    path: "/relationship/sexual-intimacy",
    Component: SexualIntimacy,
    hasDropdown: true,
  },

  {
    name: "Therapist",
    path: "/therapist",
    Component: Therapist,
  },
  {
    name: "Plans",
    path: "/plans",
    Component: Plans,
  },
  {
    name: "Business",
    path: "/business",
    Component: Business,
  },
  {
    name: "The Advice Room",
    path: "/advice-room",
    Component: AdviceRoom,
  },
  {
    name: "Login",
    path: "/login",
    Component: Login,
  },
];
