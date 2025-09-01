export interface EducationItem {
  id: string;
  title: string;
  period: string;
  faculty?: string;
  specialty?: string;
  form?: string;
}

export interface FormFields {
  name: string;
  phone: string;
  email: string;
}

export interface FormState {
  formData: FormFields;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}
