import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../primitives/Button";
import { TextField } from "../primitives/TextField";
import * as React from "react";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    closeOnOverlay: {
      control: { type: "boolean" },
    },
  },
  args: {
    closeOnOverlay: true,
  },
};

export default meta;
export type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Confirm Action</Modal.Title>
              <Modal.Description>
                Are you sure you want to perform this action? This cannot be undone.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <p className="text-sm text-mid-grey-700">
                Please review the information below before proceeding with this action.
                Once confirmed, this change cannot be reversed.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button intent="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeModal, setActiveModal] = React.useState<string | null>(null);

    return (
      <div className="flex gap-2">
        <Button onClick={() => setActiveModal("sm")}>Small</Button>
        <Button onClick={() => setActiveModal("md")}>Medium</Button>
        <Button onClick={() => setActiveModal("lg")}>Large</Button>
        <Button onClick={() => setActiveModal("xl")}>Extra Large</Button>

        <Modal open={activeModal === "sm"} onOpenChange={() => setActiveModal(null)}>
          <Modal.Content size="sm">
            <Modal.Header>
              <Modal.Title>Small Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This is a small modal with limited content.</p>
            </Modal.Body>
          </Modal.Content>
        </Modal>

        <Modal open={activeModal === "md"} onOpenChange={() => setActiveModal(null)}>
          <Modal.Content size="md">
            <Modal.Header>
              <Modal.Title>Medium Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This is a medium-sized modal with standard content width.</p>
            </Modal.Body>
          </Modal.Content>
        </Modal>

        <Modal open={activeModal === "lg"} onOpenChange={() => setActiveModal(null)}>
          <Modal.Content size="lg">
            <Modal.Header>
              <Modal.Title>Large Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This is a large modal that can accommodate more content and wider layouts.</p>
            </Modal.Body>
          </Modal.Content>
        </Modal>

        <Modal open={activeModal === "xl"} onOpenChange={() => setActiveModal(null)}>
          <Modal.Content size="xl">
            <Modal.Header>
              <Modal.Title>Extra Large Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>This is an extra large modal suitable for complex forms or detailed content.</p>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </div>
    );
  },
};

export const Form: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Content size="lg">
            <Modal.Header>
              <Modal.Title>Edit Profile</Modal.Title>
              <Modal.Description>
                Update your personal information below.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <TextField
                    label="First Name"
                    defaultValue="John"
                    required
                  />
                  <TextField
                    label="Last Name"
                    defaultValue="Doe"
                    required
                  />
                </div>
                <TextField
                  label="Email"
                  type="email"
                  defaultValue="john.doe@example.com"
                  required
                />
                <TextField
                  label="Phone"
                  type="tel"
                  defaultValue="+61 400 000 000"
                />
                <div>
                  <label className="block text-sm font-medium text-inky-blue-500 mb-1">
                    Biography
                  </label>
                  <textarea
                    className="w-full rounded-md border border-light-grey-300 px-3 py-2 text-sm focus:border-mid-blue-500 focus:outline-none focus:ring-2 focus:ring-mid-blue-500/20"
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button intent="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent="primary" onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button intent="danger" onClick={() => setOpen(true)}>
          Delete Account
        </Button>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Delete Account</Modal.Title>
              <Modal.Description>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <h4 className="text-sm font-medium text-red-800 mb-2">
                  Warning: This action is irreversible
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• All your personal data will be permanently deleted</li>
                  <li>• Your investment history will be lost</li>
                  <li>• You will lose access to all services</li>
                </ul>
              </div>
              <div className="mt-4">
                <TextField
                  label="Type 'DELETE' to confirm"
                  placeholder="DELETE"
                  required
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button intent="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent="danger" onClick={() => setOpen(false)}>
                Delete Account
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>View Details</Button>
        <Modal open={open} onOpenChange={setOpen}>
          <Modal.Content>
            <Modal.Header>
              <Modal.Title>Investment Portfolio Summary</Modal.Title>
              <Modal.Description>
                Current overview of your investment allocations
              </Modal.Description>
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-fresh-mint-500 rounded-lg">
                    <div className="text-2xl font-brand-bold text-inky-blue-500">$125,450</div>
                    <div className="text-sm text-mid-grey-600">Total Balance</div>
                  </div>
                  <div className="text-center p-4 bg-sky-blue-500/10 rounded-lg">
                    <div className="text-2xl font-brand-bold text-inky-blue-500">+8.5%</div>
                    <div className="text-sm text-mid-grey-600">Annual Return</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Conservative</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Balanced</span>
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Growth</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </>
    );
  },
};
