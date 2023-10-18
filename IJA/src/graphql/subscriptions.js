/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $email: String
  ) {
    onCreateUser(filter: $filter, email: $email) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $email: String
  ) {
    onUpdateUser(filter: $filter, email: $email) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $email: String
  ) {
    onDeleteUser(filter: $filter, email: $email) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTarefa = /* GraphQL */ `
  subscription OnCreateTarefa($filter: ModelSubscriptionTarefaFilterInput) {
    onCreateTarefa(filter: $filter) {
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
export const onUpdateTarefa = /* GraphQL */ `
  subscription OnUpdateTarefa($filter: ModelSubscriptionTarefaFilterInput) {
    onUpdateTarefa(filter: $filter) {
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
export const onDeleteTarefa = /* GraphQL */ `
  subscription OnDeleteTarefa($filter: ModelSubscriptionTarefaFilterInput) {
    onDeleteTarefa(filter: $filter) {
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
export const onCreateGestor = /* GraphQL */ `
  subscription OnCreateGestor(
    $filter: ModelSubscriptionGestorFilterInput
    $owner: String
  ) {
    onCreateGestor(filter: $filter, owner: $owner) {
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
export const onUpdateGestor = /* GraphQL */ `
  subscription OnUpdateGestor(
    $filter: ModelSubscriptionGestorFilterInput
    $owner: String
  ) {
    onUpdateGestor(filter: $filter, owner: $owner) {
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
export const onDeleteGestor = /* GraphQL */ `
  subscription OnDeleteGestor(
    $filter: ModelSubscriptionGestorFilterInput
    $owner: String
  ) {
    onDeleteGestor(filter: $filter, owner: $owner) {
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
export const onCreateAprendiz = /* GraphQL */ `
  subscription OnCreateAprendiz(
    $filter: ModelSubscriptionAprendizFilterInput
    $owner: String
  ) {
    onCreateAprendiz(filter: $filter, owner: $owner) {
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
export const onUpdateAprendiz = /* GraphQL */ `
  subscription OnUpdateAprendiz(
    $filter: ModelSubscriptionAprendizFilterInput
    $owner: String
  ) {
    onUpdateAprendiz(filter: $filter, owner: $owner) {
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
export const onDeleteAprendiz = /* GraphQL */ `
  subscription OnDeleteAprendiz(
    $filter: ModelSubscriptionAprendizFilterInput
    $owner: String
  ) {
    onDeleteAprendiz(filter: $filter, owner: $owner) {
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
export const onCreateTarefaAprendiz = /* GraphQL */ `
  subscription OnCreateTarefaAprendiz(
    $filter: ModelSubscriptionTarefaAprendizFilterInput
    $owner: String
  ) {
    onCreateTarefaAprendiz(filter: $filter, owner: $owner) {
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
export const onUpdateTarefaAprendiz = /* GraphQL */ `
  subscription OnUpdateTarefaAprendiz(
    $filter: ModelSubscriptionTarefaAprendizFilterInput
    $owner: String
  ) {
    onUpdateTarefaAprendiz(filter: $filter, owner: $owner) {
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
export const onDeleteTarefaAprendiz = /* GraphQL */ `
  subscription OnDeleteTarefaAprendiz(
    $filter: ModelSubscriptionTarefaAprendizFilterInput
    $owner: String
  ) {
    onDeleteTarefaAprendiz(filter: $filter, owner: $owner) {
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
