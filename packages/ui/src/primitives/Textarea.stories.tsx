import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Primitives/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    resize: {
      control: { type: "select" },
      options: ["none", "vertical", "horizontal", "both"],
    },
    error: {
      control: { type: "boolean" },
    },
    showCount: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "md",
    resize: "vertical",
    error: false,
    showCount: false,
    required: false,
    placeholder: "Enter your message...",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your feedback...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Comments",
    placeholder: "Share your thoughts with us...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Textarea
        size="sm"
        label="Small Textarea"
        placeholder="Small size textarea"
      />
      <Textarea
        size="md"
        label="Medium Textarea"
        placeholder="Medium size textarea"
      />
      <Textarea
        size="lg"
        label="Large Textarea"
        placeholder="Large size textarea"
      />
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: "Investment Goals",
    description: "Describe your financial objectives and timeline",
    placeholder: "I want to save for retirement by investing in...",
  },
};

export const CharacterCount: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Textarea
        label="Feedback"
        description="Please share your experience with our service"
        placeholder="Your feedback helps us improve..."
        showCount
        maxLength={200}
      />
    </div>
  ),
};

export const ErrorState: Story = {
  args: {
    label: "Required Message",
    placeholder: "This field is required",
    error: true,
    errorMessage: "Please enter a message",
    showCount: true,
    maxLength: 100,
  },
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Textarea
        label="No Resize"
        resize="none"
        placeholder="Cannot be resized"
      />
      <Textarea
        label="Vertical Resize"
        resize="vertical"
        placeholder="Can be resized vertically"
      />
      <Textarea
        label="Horizontal Resize"
        resize="horizontal"
        placeholder="Can be resized horizontally"
      />
      <Textarea
        label="Both Directions"
        resize="both"
        placeholder="Can be resized in both directions"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [message, setMessage] = useState("");

    return (
      <div className="w-80 space-y-4">
        <Textarea
          label="Message"
          description="Tell us about your investment experience"
          placeholder="I have been investing for..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          showCount
          maxLength={300}
        />

        {message && (
          <div className="p-3 bg-fresh-mint-100 rounded-md">
            <p className="text-sm font-medium text-inky-blue-500 mb-1">
              Preview:
            </p>
            <p className="text-sm text-inky-blue-500">
              {message}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const FormValidation: Story = {
  render: () => {
    const [feedback, setFeedback] = useState("");
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
      if (!feedback.trim()) {
        setShowError(true);
      } else if (feedback.length < 10) {
        setShowError(true);
      } else {
        setShowError(false);
        alert("Feedback submitted successfully!");
      }
    };

    return (
      <div className="w-80 space-y-4">
        <Textarea
          label="Service Feedback"
          description="Minimum 10 characters required"
          placeholder="Please describe your experience..."
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
            setShowError(false);
          }}
          error={showError}
          errorMessage={
            !feedback.trim()
              ? "Feedback is required"
              : feedback.length < 10
                ? "Please provide at least 10 characters"
                : undefined
          }
          showCount
          maxLength={500}
          required
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2"
        >
          Submit Feedback
        </button>
      </div>
    );
  },
};

export const ContactForm: Story = {
  render: () => {
    const [inquiry, setInquiry] = useState("");
    const [details, setDetails] = useState("");

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-heading-sm font-brand-bold text-inky-blue-500">
          Contact Us
        </h3>

        <div className="space-y-4">
          <Textarea
            label="Inquiry Type"
            description="Briefly describe your inquiry"
            placeholder="e.g., Question about investment options"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            size="sm"
            showCount
            maxLength={100}
          />

          <Textarea
            label="Detailed Message"
            description="Provide as much detail as possible to help us assist you"
            placeholder="Please provide specific details about your inquiry..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            size="lg"
            showCount
            maxLength={1000}
            required
          />
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-mid-blue-500 text-white rounded-md hover:bg-mid-blue-600 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2">
            Send Message
          </button>
          <button className="px-4 py-2 border border-mid-grey-400 text-inky-blue-500 rounded-md hover:bg-light-grey-100 focus:outline-none focus:ring-2 focus:ring-mid-blue-500 focus:ring-offset-2">
            Save Draft
          </button>
        </div>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [content, setContent] = useState(`Dear CareSuper Team,

I am writing to inquire about the investment options available for my superannuation account. I have been a member for several years and am interested in exploring more growth-oriented investment strategies.

Currently, I am in the balanced option, but I would like to understand:

1. The differences between your various investment options
2. The historical performance of each option
3. The associated fees and charges
4. The process for switching between options

I am particularly interested in the growth and aggressive options, as I am still 15 years away from retirement and can tolerate some additional risk for potentially higher returns.

Could you please provide me with detailed information about these options, including any documentation that might help me make an informed decision?

Thank you for your time and assistance.

Best regards,
John Smith`);

    return (
      <div className="w-96 space-y-4">
        <Textarea
          label="Message Content"
          description="Long form message example"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          size="lg"
          showCount
          maxLength={2000}
        />
      </div>
    );
  },
};

export const DisabledState: Story = {
  args: {
    label: "Read-only Message",
    description: "This field cannot be edited",
    value: "This is a read-only textarea that displays information but cannot be modified by the user.",
    disabled: true,
    showCount: true,
    maxLength: 200,
  },
};

export const RequiredField: Story = {
  args: {
    label: "Complaint Details",
    description: "Please provide a detailed description of your complaint",
    placeholder: "Describe the issue you experienced...",
    required: true,
    showCount: true,
    maxLength: 500,
  },
};
