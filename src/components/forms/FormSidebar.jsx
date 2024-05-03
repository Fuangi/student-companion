import FormButton from "./FormButton";

function FormSidebar() {
  return (
    <div className="form-sidebar">
      <div className="side-images"></div>
      <div className="side-text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          cumque, repudiandae quaerat quo cupiditate soluta dolore nam deserunt
          alias assumenda voluptatum expedita architecto quod exercitationem
          nobis sint. Inventore omnis molestias quia iusto, velit quis dolores
          dolor aliquid assumenda distinctio unde quisquam architecto neque
          atque labore voluptate necessitatibus, rerum veniam voluptatibus
          quaerat minus recusandae harum dolorum consequatur. Dolorum minus,
          nemo perspiciatis reprehenderit tempore odit quaerat assumenda, eos
          dicta a quod praesentium aspernatur labore consequatur aut dolores.
        </p>
      </div>
      <div className="side-btn">
        <FormButton children="Know More" />
      </div>
    </div>
  );
}

export default FormSidebar;
