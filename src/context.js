import React from 'react';

export const initial = {
    tester: false,
//   token: localStorage.getItem('token'),
//   snackbarMessage: undefined,
//   snackbarSeverity: undefined,
//   newQuizShow: false,
//   activeQuizzes: [],
//   gameStop: [],
//   gameStarted: true,
//   adminQuestionPosition: -1,
//   showResultsDialog: [],
//   curQuiz: {},
//   curQuizId: '',
//   quizzes: [],
//   clickStop: false,
//   newQuizName: '',
//   newQuestionShow: false,
//   editQuestionDetailsShow: false,
//   deletedQuizzes: [],
//   showDeleteConfirm: false,
};

export const Context = React.createContext(initial);
export const useContext = React.useContext;

