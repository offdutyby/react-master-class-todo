import { atom, selector } from 'recoil';

export enum Categories {
	'TO_DO' = 'TO_DO',
	'DOING' = 'DOING',
	'DONE' = 'DONE',
}
export interface IToDo {
	text: string;
	id: number;
	category: Categories;
}

export const categoryState = atom<Categories>({
	key: 'category',
	default: Categories.TO_DO,
});

export const categoryListState = atom<string[]>({
	key: 'categoryListState',
	default: ['TO_DO', 'DOING', 'DONE'],
});

export const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: localStorage.getItem('todoArr') !== null ? JSON.parse(localStorage.getItem('todoArr') as string) : [],
});

export const toDoSelector = selector({
	key: 'toDoSelector',
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		localStorage.setItem('todoArr', JSON.stringify(toDos));
		return toDos.filter((toDo) => toDo.category === category);
	},
});

export const categoryListSelector = selector({
	key: 'categoryListSelector',
	get: ({ get }) => {
		const categoryList = get(categoryListState);
		localStorage.setItem('categoryListState', JSON.stringify(categoryList));

		return console.log(localStorage.getItem('categoryListState'));
	},
});
