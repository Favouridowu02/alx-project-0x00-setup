import { ButtonProps } from "@/interfaces/index";

const Button: React.FC<ButtonProps> = ({ sizes, shapes, title, styles }) => {
    return (
        <button className={`height${sizes} ${shapes} border px-3 py-1 text-lg mt-3 bg-blue-500 text-white ${styles}`}>
            {title}
        </button>
    );
};

export default Button;
