import styled from "styled-components";
import "./Button.css";

const Button = (props) => {
  return (
    <ButtonComps
      type={props.type}
      className={`${
        props.variant === "outline"
          ? "btn-outline"
          : props.variant === "text"
          ? "btn-text"
          : "btn-default"
      }
      ${
        props.color === "primary"
          ? "btn-primary"
          : props.color === "secondary"
          ? "btn-secondary"
          : props.color === "danger"
          ? "btn-danger"
          : "btn-default"
      }
      ${!props.disableShadow && "shadow"}
      ${props.disabled && "disable"}
      ${props.size === "sm" && "btn-sm"}
      ${props.size === "md" && "btn-md"}
      ${props.size === "lg" && "btn-lg"}`}
      disabled={props.disabled}
    >
      {props.startIcon && (
        <span class="material-symbols-outlined">{props.startIcon}</span>
      )}
      {props.value}
      {props.endIcon && (
        <span class="material-symbols-outlined">{props.endIcon}</span>
      )}
    </ButtonComps>
  );
};

const ButtonComps = styled.button`
  outline: none;
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
`;

export default Button;
