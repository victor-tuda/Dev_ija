/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTarefa = /* GraphQL */ `
  mutation CreateTarefa(
    $input: CreateTarefaInput!
    $condition: ModelTarefaConditionInput
  ) {
    createTarefa(input: $input, condition: $condition) {
      id
      titulo
      descricao
      data
      hora
      gestorID
      AprendizesTarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTarefa = /* GraphQL */ `
  mutation UpdateTarefa(
    $input: UpdateTarefaInput!
    $condition: ModelTarefaConditionInput
  ) {
    updateTarefa(input: $input, condition: $condition) {
      id
      titulo
      descricao
      data
      hora
      gestorID
      AprendizesTarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTarefa = /* GraphQL */ `
  mutation DeleteTarefa(
    $input: DeleteTarefaInput!
    $condition: ModelTarefaConditionInput
  ) {
    deleteTarefa(input: $input, condition: $condition) {
      id
      titulo
      descricao
      data
      hora
      gestorID
      AprendizesTarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGestor = /* GraphQL */ `
  mutation CreateGestor(
    $input: CreateGestorInput!
    $condition: ModelGestorConditionInput
  ) {
    createGestor(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      Idade
      dataNasc
      endereco
      CEP
      email
      celular
      setor
      cargo
      GestorAprendizes {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Tarefas {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateGestor = /* GraphQL */ `
  mutation UpdateGestor(
    $input: UpdateGestorInput!
    $condition: ModelGestorConditionInput
  ) {
    updateGestor(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      Idade
      dataNasc
      endereco
      CEP
      email
      celular
      setor
      cargo
      GestorAprendizes {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Tarefas {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteGestor = /* GraphQL */ `
  mutation DeleteGestor(
    $input: DeleteGestorInput!
    $condition: ModelGestorConditionInput
  ) {
    deleteGestor(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      Idade
      dataNasc
      endereco
      CEP
      email
      celular
      setor
      cargo
      GestorAprendizes {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      Tarefas {
        items {
          id
          nome
          sobrenome
          RG
          CPF
          idade
          dataNasc
          endereco
          CEP
          email
          celular
          dataIInicioContratacao
          dataFimContratacao
          setor
          cargo
          gestorID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createAprendiz = /* GraphQL */ `
  mutation CreateAprendiz(
    $input: CreateAprendizInput!
    $condition: ModelAprendizConditionInput
  ) {
    createAprendiz(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      idade
      dataNasc
      endereco
      CEP
      email
      celular
      dataIInicioContratacao
      dataFimContratacao
      setor
      cargo
      gestorID
      tarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateAprendiz = /* GraphQL */ `
  mutation UpdateAprendiz(
    $input: UpdateAprendizInput!
    $condition: ModelAprendizConditionInput
  ) {
    updateAprendiz(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      idade
      dataNasc
      endereco
      CEP
      email
      celular
      dataIInicioContratacao
      dataFimContratacao
      setor
      cargo
      gestorID
      tarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteAprendiz = /* GraphQL */ `
  mutation DeleteAprendiz(
    $input: DeleteAprendizInput!
    $condition: ModelAprendizConditionInput
  ) {
    deleteAprendiz(input: $input, condition: $condition) {
      id
      nome
      sobrenome
      RG
      CPF
      idade
      dataNasc
      endereco
      CEP
      email
      celular
      dataIInicioContratacao
      dataFimContratacao
      setor
      cargo
      gestorID
      tarefas {
        items {
          id
          tarefaId
          aprendizId
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createTarefaAprendiz = /* GraphQL */ `
  mutation CreateTarefaAprendiz(
    $input: CreateTarefaAprendizInput!
    $condition: ModelTarefaAprendizConditionInput
  ) {
    createTarefaAprendiz(input: $input, condition: $condition) {
      id
      tarefaId
      aprendizId
      tarefa {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      aprendiz {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTarefaAprendiz = /* GraphQL */ `
  mutation UpdateTarefaAprendiz(
    $input: UpdateTarefaAprendizInput!
    $condition: ModelTarefaAprendizConditionInput
  ) {
    updateTarefaAprendiz(input: $input, condition: $condition) {
      id
      tarefaId
      aprendizId
      tarefa {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      aprendiz {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTarefaAprendiz = /* GraphQL */ `
  mutation DeleteTarefaAprendiz(
    $input: DeleteTarefaAprendizInput!
    $condition: ModelTarefaAprendizConditionInput
  ) {
    deleteTarefaAprendiz(input: $input, condition: $condition) {
      id
      tarefaId
      aprendizId
      tarefa {
        id
        titulo
        descricao
        data
        hora
        gestorID
        AprendizesTarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      aprendiz {
        id
        nome
        sobrenome
        RG
        CPF
        idade
        dataNasc
        endereco
        CEP
        email
        celular
        dataIInicioContratacao
        dataFimContratacao
        setor
        cargo
        gestorID
        tarefas {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
