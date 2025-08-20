import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  EnhancedTextField,
  CurrencyPrefix,
  PercentageSuffix,
  SearchIcon,
  ClearButton
} from "./EnhancedTextField";
import { Icon } from "./Icon";

const meta: Meta<typeof EnhancedTextField> = {
  title: "Primitives/EnhancedTextField",
  component: EnhancedTextField,
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
    showCount: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    error: false,
    showCount: false,
    loading: false,
    required: false,
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof EnhancedTextField>;

export const Default: Story = {
  args: {
    label: "Enhanced Input",
    placeholder: "Type something...",
  },
};

export const WithPrefixSuffix: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        label="Amount"
        prefix={<CurrencyPrefix />}
        suffix="AUD"
        placeholder="0.00"
        type="number"
      />

      <EnhancedTextField
        label="Interest Rate"
        suffix={<PercentageSuffix />}
        placeholder="0.00"
        type="number"
        step="0.01"
      />

      <EnhancedTextField
        label="Search"
        prefix={<SearchIcon />}
        placeholder="Search investments..."
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        size="sm"
        label="Small Input"
        prefix="$"
        suffix="USD"
        placeholder="Small size"
      />

      <EnhancedTextField
        size="md"
        label="Medium Input"
        prefix="$"
        suffix="USD"
        placeholder="Medium size"
      />

      <EnhancedTextField
        size="lg"
        label="Large Input"
        prefix="$"
        suffix="USD"
        placeholder="Large size"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        label="Email Address"
        prefix={
          <Icon size="sm" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </Icon>
        }
        type="email"
        placeholder="your@email.com"
      />

      <EnhancedTextField
        label="Phone Number"
        prefix={
          <Icon size="sm" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </Icon>
        }
        type="tel"
        placeholder="+61 400 000 000"
      />

      <EnhancedTextField
        label="Website URL"
        prefix="https://"
        suffix={
          <Icon size="sm" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </Icon>
        }
        placeholder="example.com"
      />
    </div>
  ),
};

export const WithClearButton: Story = {
  render: () => {
    const [value1, setValue1] = useState("Some text to clear");
    const [value2, setValue2] = useState("");

    return (
      <div className="w-80 space-y-4">
        <EnhancedTextField
          label="Search Query"
          prefix={<SearchIcon />}
          suffix={value1 ? <ClearButton onClear={() => setValue1("")} /> : undefined}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Search..."
        />

        <EnhancedTextField
          label="Filter Text"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          suffix={value2 ? <ClearButton onClear={() => setValue2("")} /> : undefined}
          placeholder="Type to filter..."
        />
      </div>
    );
  },
};

export const WithCharacterCount: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        label="Short Message"
        description="Maximum 50 characters"
        placeholder="Enter a short message..."
        showCount
        maxLength={50}
      />

      <EnhancedTextField
        label="Description"
        description="Provide a detailed description"
        placeholder="Describe your investment goals..."
        showCount
        maxLength={200}
        defaultValue="I want to save for retirement"
      />
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        label="Processing Input"
        loading
        placeholder="Loading..."
        defaultValue="Validating data..."
      />

      <EnhancedTextField
        label="Search with Loading"
        prefix={<SearchIcon />}
        loading
        placeholder="Searching..."
      />

      <EnhancedTextField
        label="Currency Conversion"
        prefix="$"
        suffix="USD"
        loading
        placeholder="Converting..."
        defaultValue="1000"
      />
    </div>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <EnhancedTextField
        label="Invalid Amount"
        prefix="$"
        suffix="AUD"
        error
        errorMessage="Amount must be greater than $0"
        defaultValue="-100"
      />

      <EnhancedTextField
        label="Required Email"
        prefix={
          <Icon size="sm" decorative>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </Icon>
        }
        error
        errorMessage="Please enter a valid email address"
        placeholder="your@email.com"
        required
      />

      <EnhancedTextField
        label="Message"
        description="Exceeds character limit"
        showCount
        maxLength={20}
        defaultValue="This message is way too long for the limit"
        error
        errorMessage="Message exceeds maximum length"
      />
    </div>
  ),
};

export const FinancialInputs: Story = {
  render: () => {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [years, setYears] = useState("");

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-lg font-brand-bold text-inky-blue-500">
          Investment Calculator
        </h3>

        <div className="space-y-4">
          <EnhancedTextField
            label="Initial Investment"
            description="Minimum investment is $1,000"
            prefix={<CurrencyPrefix currency="$" />}
            suffix="AUD"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10000"
            min="1000"
            step="1000"
          />

          <EnhancedTextField
            label="Expected Annual Return"
            description="Historical average is 7-9%"
            suffix={<PercentageSuffix />}
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="7.5"
            min="0"
            max="20"
            step="0.1"
          />

          <EnhancedTextField
            label="Investment Period"
            description="Years until retirement"
            suffix="years"
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="30"
            min="1"
            max="50"
          />
        </div>

        {amount && rate && years && (
          <div className="p-4 bg-fresh-mint-100 rounded-md">
            <h4 className="font-medium text-inky-blue-500 mb-2">Projected Result</h4>
            <p className="text-2xl font-bold text-inky-blue-500">
              ${(parseFloat(amount) * Math.pow(1 + parseFloat(rate) / 100, parseFloat(years))).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-mid-grey-600">
              After {years} years at {rate}% annual return
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const SearchInterface: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterValue, setFilterValue] = useState("");

    return (
      <div className="w-96 space-y-4">
        <div className="flex gap-2">
          <EnhancedTextField
            prefix={<SearchIcon />}
            suffix={searchTerm ? <ClearButton onClear={() => setSearchTerm("")} /> : undefined}
            placeholder="Search investments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <EnhancedTextField
            size="sm"
            prefix="Min $"
            placeholder="0"
            type="number"
          />
          <EnhancedTextField
            size="sm"
            prefix="Max $"
            placeholder="1000000"
            type="number"
          />
        </div>

        <EnhancedTextField
          size="sm"
          label="Risk Level"
          suffix={<PercentageSuffix />}
          placeholder="0-100"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          type="range"
          min="0"
          max="100"
        />
      </div>
    );
  },
};

export const FormValidation: Story = {
  render: () => {
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateAmount = (amount: string) => {
      const num = parseFloat(amount);
      return !isNaN(num) && num >= 100;
    };

    const validatePhone = (phone: string) => {
      return /^\+?61[0-9\s\-]{8,}$/.test(phone.replace(/\s/g, ''));
    };

    const handleSubmit = () => {
      setShowErrors(true);
    };

    return (
      <div className="w-80 space-y-6">
        <h3 className="text-lg font-brand-bold text-inky-blue-500">
          Contact Information
        </h3>

        <div className="space-y-4">
          <EnhancedTextField
            label="Email Address"
            prefix={
              <Icon size="sm" decorative>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </Icon>
            }
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            error={showErrors && !validateEmail(email)}
            errorMessage={showErrors && !validateEmail(email) ? "Please enter a valid email address" : undefined}
            required
          />

          <EnhancedTextField
            label="Initial Contribution"
            description="Minimum $100"
            prefix={<CurrencyPrefix />}
            suffix="AUD"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
            error={showErrors && !validateAmount(amount)}
            errorMessage={showErrors && !validateAmount(amount) ? "Amount must be at least $100" : undefined}
            required
          />

          <EnhancedTextField
            label="Phone Number"
            prefix={
              <Icon size="sm" decorative>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </Icon>
            }
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+61 400 000 000"
            error={showErrors && phone && !validatePhone(phone)}
            errorMessage={showErrors && phone && !validatePhone(phone) ? "Please enter a valid Australian phone number" : undefined}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2"
        >
          Submit Application
        </button>
      </div>
    );
  },
};
