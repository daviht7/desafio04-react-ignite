import { FiCheckSquare } from "react-icons/fi";

import { useRef } from "react";
import Input from "../Input";
import { Form } from "./styles";
import { Modal } from "../Modal";

interface IFood {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  available?: boolean;
  image?: string;
}

interface ModalEditFoodProps {
  setIsOpen: () => void;
  handleUpdateFood: (food: IFood) => void;
  editingFood: IFood;
  isOpen?: boolean;
}

export function ModalEditFood({
  setIsOpen,
  isOpen,
  editingFood,
  handleUpdateFood,
}: ModalEditFoodProps) {
  const formRef = useRef();

  const handleSubmit = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

/*class ModalEditFood extends Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }

  handleSubmit = async (data) => {
    const { setIsOpen, handleUpdateFood } = this.props;

    handleUpdateFood(data);
    setIsOpen();
  };

  render() {
    const { isOpen, setIsOpen, editingFood } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form
          ref={this.formRef}
          onSubmit={this.handleSubmit}
          initialData={editingFood}
        >
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
}

export default ModalEditFood;
*/
