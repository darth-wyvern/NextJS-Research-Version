import FormikLogin from "../src/components/loginComponent"
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react';

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Login component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the login form", async () => {
    render(<FormikLogin />);
    expect(screen.getByText("Hello and welcome back!")).toBeInTheDocument();
    expect(screen.getByText("Please log in to continue.")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("register a account")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should show validation error when username is not provided", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("username"), { target: { value: "" } });
    fireEvent.blur(screen.getByPlaceholderText("username"));
    await waitFor(() => {
      expect(screen.getByText("username is required")).toBeInTheDocument();
    });
  });

  it("should show validation error when password is not provided", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("password"), { target: { value: "" } });
    fireEvent.blur(screen.getByPlaceholderText("password"));
    await waitFor(() => {
      expect(screen.getByText("password is required")).toBeInTheDocument();
    });
  });

  it("should show validation error when username is too short", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("username"), { target: { value: "short" } });
    fireEvent.blur(screen.getByPlaceholderText("username"));
    await waitFor(() => {
      expect(screen.getByText("username have to than 6 character")).toBeInTheDocument();
    });
  });

  it("should show validation error when password is too short", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("password"), { target: { value: "short" } });
    fireEvent.blur(screen.getByPlaceholderText("password"));
    await waitFor(() => {
      expect(screen.getByText("password have to than 6 character")).toBeInTheDocument();
    });
  });

  it("should show validation error when username is too long", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("username"), { target: { value: "thisusernameistoolongtovalidatetheinput" } });
    fireEvent.blur(screen.getByPlaceholderText("username"));
    await waitFor(() => {
      expect(screen.getByText("username have to smaller 24 character")).toBeInTheDocument();
    });
  });

  it("should show validation error when password is too long", async () => {
    render(<FormikLogin />);
    fireEvent.change(screen.getByPlaceholderText("password"), { target: { value: "thispasswordistoolongtovalidatetheinput" } });
    fireEvent.blur(screen.getByPlaceholderText("password"));
    await waitFor(() => {
      expect(screen.getByText("password have to smaller 24 character")).toBeInTheDocument();
    });
  });
});