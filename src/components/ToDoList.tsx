import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryListState, categoryState, toDoSelector } from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const categoriesList = useRecoilValue(categoryListState);

	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value as any);
	};

	return (
		<Container>
			<Title>To Dos</Title>
			<CreateCategory />
			<Select value={category} onInput={onInput}>
				{categoriesList.map((item) => (
					<option value={item}>{item}</option>
				))}
			</Select>
			<CreateToDo />
			{toDos?.map((toDo) => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</Container>
	);
}

export default ToDoList;

const Container = styled.section`
	max-width: 800px;
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
`;

const Title = styled.h1`
	font-size: 25px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
	margin-top: 15px;
`;

const Select = styled.select`
	width: 100px;
	height: 30px;
	border-radius: 10px;
	text-align: center;
	margin-bottom: 30px;
`;
