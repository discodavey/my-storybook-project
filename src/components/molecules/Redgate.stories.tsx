import { Meta, StoryObj } from "@storybook/react";
import Redgate from "./redgate";

export default {
  title: "Molecules/Redgate",
  component: Redgate,
} as Meta;

export const Default: StoryObj<typeof Redgate> = {
  args: {
    products: [
      {
        name: "ANTS Memory Profiler",
        description: "Profile and boost the performance of your .NET applications",
        logo: "https://cdn.red-gate.com/assets/products/data-compare-for-oracle/images/data-compare-for-oracle.svg",
        free: true
      },
      {
        name: "Data Compare for Oracle",
        description: "Compare data, highlight differences, deploy changes",
        logo: "https://cdn.red-gate.com/assets/products/ants-performance-profiler/images/ants-performance-profiler.svg",
        free: false
      }
    ]
  },
};

