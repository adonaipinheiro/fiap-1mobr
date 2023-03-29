interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  loading?: boolean;
}

interface ButtonStylesProps {
  loading?: boolean;
}
