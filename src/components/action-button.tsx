interface ActionButtonProps {
  icon: string;
  action(): void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, action }) => {
  return (
    <button className="button is-primary is-small" onClick={() => action()}>
      <span className="icon">
        <i className={`fas ${icon}`} />
      </span>
    </button>
  );
};

export default ActionButton;
