import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  type SelectOption
} from "./Select";

const meta: Meta<typeof Select> = {
  title: "Primitives/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    error: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    placeholder: "Select an option...",
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const basicOptions: SelectOption[] = [
  { value: "conservative", label: "Conservative" },
  { value: "balanced", label: "Balanced" },
  { value: "growth", label: "Growth" },
  { value: "aggressive", label: "Aggressive" },
];

const investmentOptions: SelectOption[] = [
  { value: "conservative", label: "Conservative Strategy" },
  { value: "balanced", label: "Balanced Strategy" },
  { value: "growth", label: "Growth Strategy" },
  { value: "aggressive", label: "Aggressive Strategy" },
  { value: "ethical", label: "Ethical Investment" },
  { value: "international", label: "International Markets" },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: "Choose investment strategy",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Investment Strategy",
    options: basicOptions,
    placeholder: "Select your preferred strategy",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Select
        size="sm"
        label="Small Select"
        options={basicOptions}
        placeholder="Small size"
      />
      <Select
        size="md"
        label="Medium Select"
        options={basicOptions}
        placeholder="Medium size"
      />
      <Select
        size="lg"
        label="Large Select"
        options={basicOptions}
        placeholder="Large size"
      />
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: "Risk Tolerance",
    description: "Choose the level of investment risk you're comfortable with",
    options: [
      { value: "low", label: "Low Risk - Capital preservation focus" },
      { value: "medium", label: "Medium Risk - Balanced growth" },
      { value: "high", label: "High Risk - Maximum growth potential" },
    ],
    placeholder: "Select risk level",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Required Field",
    options: basicOptions,
    placeholder: "Please select an option",
    error: true,
    errorMessage: "This field is required",
  },
};

export const DisabledOptions: Story = {
  args: {
    label: "Investment Options",
    options: [
      { value: "conservative", label: "Conservative" },
      { value: "balanced", label: "Balanced" },
      { value: "growth", label: "Growth" },
      { value: "aggressive", label: "Aggressive (Currently unavailable)", disabled: true },
      { value: "premium", label: "Premium Strategy (Minimum $100k)", disabled: true },
    ],
    placeholder: "Choose available option",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80 space-y-4">
        <Select
          label="Investment Strategy"
          description="Your selection will determine portfolio allocation"
          options={investmentOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Select investment strategy"
        />

        {value && (
          <div className="p-4 bg-fresh-mint-100 rounded-md">
            <p className="text-sm font-medium text-inky-blue-500">
              Selected: {investmentOptions.find(opt => opt.value === value)?.label}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const FormValidation: Story = {
  render: () => {
    const [strategy, setStrategy] = useState("");
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
      if (!strategy) {
        setShowError(true);
      } else {
        setShowError(false);
        alert(`Selected strategy: ${strategy}`);
      }
    };

    return (
      <div className="w-80 space-y-4">
        <Select
          label="Investment Strategy"
          description="Choose your preferred investment approach"
          options={basicOptions}
          value={strategy}
          onValueChange={(value) => {
            setStrategy(value);
            setShowError(false);
          }}
          placeholder="Select investment strategy"
          error={showError}
          errorMessage={showError ? "Please select an investment strategy" : undefined}
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    );
  },
};

export const CustomSelect: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80 space-y-4">
        <label className="text-sm font-medium text-inky-blue-500">
          Account Type
        </label>

        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Select account type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Personal Accounts</SelectLabel>
              <SelectItem value="personal">Personal Super</SelectItem>
              <SelectItem value="spouse">Spouse Account</SelectItem>
              <SelectSeparator />
              <SelectLabel>Business Accounts</SelectLabel>
              <SelectItem value="smsf">SMSF</SelectItem>
              <SelectItem value="corporate">Corporate Super</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const ComplexOptions: Story = {
  render: () => {
    const [frequency, setFrequency] = useState("");
    const [amount, setAmount] = useState("");

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
          Contribution Settings
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <Select
            label="Frequency"
            options={[
              { value: "weekly", label: "Weekly" },
              { value: "fortnightly", label: "Fortnightly" },
              { value: "monthly", label: "Monthly" },
              { value: "quarterly", label: "Quarterly" },
              { value: "annually", label: "Annually" },
            ]}
            value={frequency}
            onValueChange={setFrequency}
            placeholder="How often?"
          />

          <Select
            label="Amount"
            options={[
              { value: "50", label: "$50" },
              { value: "100", label: "$100" },
              { value: "200", label: "$200" },
              { value: "500", label: "$500" },
              { value: "1000", label: "$1,000" },
              { value: "custom", label: "Custom amount" },
            ]}
            value={amount}
            onValueChange={setAmount}
            placeholder="Select amount"
          />
        </div>

        {frequency && amount && (
          <div className="p-4 bg-light-grey-100 rounded-md">
            <p className="text-sm text-inky-blue-500">
              <span className="font-medium">Summary:</span> {amount === "custom" ? "Custom" : `$${amount}`} {frequency} contributions
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const LongOptionsList: Story = {
  render: () => {
    const countries = [
      { value: "au", label: "Australia" },
      { value: "nz", label: "New Zealand" },
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
      { value: "de", label: "Germany" },
      { value: "fr", label: "France" },
      { value: "jp", label: "Japan" },
      { value: "sg", label: "Singapore" },
      { value: "hk", label: "Hong Kong" },
      { value: "cn", label: "China" },
      { value: "in", label: "India" },
      { value: "br", label: "Brazil" },
      { value: "mx", label: "Mexico" },
      { value: "za", label: "South Africa" },
    ];

    return (
      <div className="w-80">
        <Select
          label="Country of Birth"
          description="This helps us verify your identity"
          options={countries}
          placeholder="Select your country"
        />
      </div>
    );
  },
};

export const MultipleSelects: Story = {
  render: () => {
    const [employmentStatus, setEmploymentStatus] = useState("");
    const [industry, setIndustry] = useState("");
    const [salary, setSalary] = useState("");

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
          Employment Information
        </h3>

        <div className="space-y-4">
          <Select
            label="Employment Status"
            options={[
              { value: "full-time", label: "Full-time Employee" },
              { value: "part-time", label: "Part-time Employee" },
              { value: "casual", label: "Casual Employee" },
              { value: "contractor", label: "Contractor/Freelancer" },
              { value: "self-employed", label: "Self-employed" },
              { value: "unemployed", label: "Unemployed" },
              { value: "retired", label: "Retired" },
              { value: "student", label: "Student" },
            ]}
            value={employmentStatus}
            onValueChange={setEmploymentStatus}
            placeholder="Select employment status"
          />

          <Select
            label="Industry"
            options={[
              { value: "healthcare", label: "Healthcare & Social Assistance" },
              { value: "education", label: "Education & Training" },
              { value: "retail", label: "Retail Trade" },
              { value: "manufacturing", label: "Manufacturing" },
              { value: "construction", label: "Construction" },
              { value: "professional", label: "Professional Services" },
              { value: "finance", label: "Financial Services" },
              { value: "it", label: "Information Technology" },
              { value: "government", label: "Public Administration" },
              { value: "other", label: "Other" },
            ]}
            value={industry}
            onValueChange={setIndustry}
            placeholder="Select industry"
            disabled={!employmentStatus || employmentStatus === "unemployed" || employmentStatus === "retired"}
          />

          <Select
            label="Annual Salary Range"
            options={[
              { value: "under-30k", label: "Under $30,000" },
              { value: "30k-50k", label: "$30,000 - $50,000" },
              { value: "50k-70k", label: "$50,000 - $70,000" },
              { value: "70k-100k", label: "$70,000 - $100,000" },
              { value: "100k-150k", label: "$100,000 - $150,000" },
              { value: "150k-200k", label: "$150,000 - $200,000" },
              { value: "over-200k", label: "Over $200,000" },
            ]}
            value={salary}
            onValueChange={setSalary}
            placeholder="Select salary range"
            disabled={!employmentStatus || ["unemployed", "retired", "student"].includes(employmentStatus)}
          />
        </div>
      </div>
    );
  },
};
