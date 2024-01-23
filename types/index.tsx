export interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export interface LoginResponse {
  error: string;
  success?: string; // Make success property optional if it's not always present
}

export interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
export interface HeaderProps {
  label: string;
}
export interface BackButtonProps {
  href: string;
  label: string;
}
export interface FormErrorsProps {
  message?: string;
}
export interface FormSuccessProps {
  message?: string;
}
