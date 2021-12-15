import { categoryListState } from '../atoms';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

export default function CreateCategory() {
	const setCategoryList = useSetRecoilState(categoryListState);
	const { register, handleSubmit, setValue } = useForm();
	const handleValid = ({ category }: any) => {
		setCategoryList((oldCategoryList) => [...oldCategoryList, category]);
		setValue('category', '');
	};
	return (
		<Form onSubmit={handleSubmit(handleValid)}>
			<Input
				{...register('category', {
					required: 'Please write a New Category',
				})}
				placeholder="Write a New Category"
			/>
			<Button>Add</Button>
		</Form>
	);
}

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
