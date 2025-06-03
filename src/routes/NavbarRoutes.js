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
import Hypochondriasis from "../pages/specific-disorder/Hypochondriasis";
import MoodDisorder from "../pages/specific-disorder/MoodDisorder";
import OCD from "../pages/specific-disorder/OCD";
import Postpartum from "../pages/specific-disorder/Postpartum";
import PersonalityDisorder from "../pages/specific-disorder/PersonalityDisorder";
import PTD from "../pages/specific-disorder/PTD";
import Phobia from "../pages/specific-disorder/Phobia";
import Psychosis from "../pages/specific-disorder/Psychosis";
import Ptcd from "../pages/specific-disorder/Ptcd";
import Schizophrenia from "../pages/specific-disorder/Schizophrenia";
import ADHD from "../pages/specific-disorder/ADHD";
import Autistic from "../pages/specific-disorder/Autistic";
import Abuse from "../pages/specific-disorder/Abuse";
import Addiction from "../pages/specific-disorder/Addiction";
import SelfRegulation from "../pages/specific-disorder/SelfRegulation";
import LGBTQ from "../pages/specific-disorder/LGBTQ";

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
    name: "Specific Disorder",
    path: "/specific-disorder/hypochondriasis",
    Component: Hypochondriasis,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/mood-disorder",
    Component: MoodDisorder,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/ocd",
    Component: OCD,
  },
{
    name: "Specific Disorder",
    path: "/specific-disorder/postpartum",
    Component: Postpartum,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/personality-disorder",
    Component: PersonalityDisorder,
  },
 {
    name: "Specific Disorder",
    path: "/specific-disorder/7ptd",
    Component: PTD,
  },
   {
    name: "Specific Disorder",
    path: "/specific-disorder/phobia",
    Component: Phobia,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/psychosis",
    Component: Psychosis,
  },
   {
    name: "Specific Disorder",
    path: "/specific-disorder/Ptcd",
    Component: Ptcd,
  },
  
    {
    name: "Specific Disorder",
    path: "/specific-disorder/schizophrenia",
    Component: Schizophrenia,
  },
  
   {
    name: "Specific Disorder",
    path: "/specific-disorder/Adhd",
    Component: ADHD,
  },

{
    name: "Specific Disorder",
    path: "/specific-disorder/autistic",
    Component: Autistic,
  },
  
{
    name: "Specific Disorder",
    path: "/specific-disorder/abuse",
    Component: Abuse,
  },
{
    name: "Specific Disorder",
    path: "/specific-disorder/abuse",
    Component: Abuse,
  },
{
    name: "Specific Disorder",
    path: "/specific-disorder/addiction",
    Component: Addiction,
  },
  {
    name: "Specific Disorder",
    path: "/specific-disorder/self-regulation",
    Component: SelfRegulation,
  },
 {
    name: "Specific Disorder",
    path: "/specific-disorder/lgbtq",
    Component: LGBTQ,
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
