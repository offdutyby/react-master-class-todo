import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoState } from '../atoms';

interface IForm {
	toDo: string;
}

function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
	const category = useRecoilValue(categoryState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category }, ...oldToDos]);
		setValue('toDo', '');
	};
	return (
		<Form onSubmit={handleSubmit(handleValid)}>
			<Input
				{...register('toDo', {
					required: 'Please write a To Do',
				})}
				placeholder="Write a to do"
			/>
			<Button>Add</Button>
		</Form>
	);
}

export default CreateToDo;

const Form = styled.form`
	width: 100%;
	text-align: center;
	margin-bottom: 40px;
`;

const Input = styled.input`
	max-width: 500px;
	min-width: 200px;
	height: 40px;
	border-radius: 10px;
	box-shadow: none;
	border: 2px solid white;
`;

const Button = styled.button`
	width: 50px;
	height: 40px;
	border-radius: 10px;
	text-shadow: none;
	border: 2px solid white;
	background-color: teal;
	color: white;
	font-size: 15px;
	font-weight: bold;
`;
