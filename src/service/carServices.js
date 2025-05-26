export async function fetchCarros() {
  try {
    const response = await fetch('https://web-cars-7wxh.onrender.com/api/cars');
    const json = await response.json();
    return json.data || [];
  } catch (error) {
    console.error('Erro ao buscar carros:', error);
    return [];
  }
}

export async function deletarCarro(id) {
  try {
    const response = await fetch(`https://web-cars-7wxh.onrender.com/api/cars/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar carro');
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar carro:', error);
    throw error; // repropaga para ser tratado na tela
  }
}


export async function editarCarro(id, dadosAtualizados) {
  try {
    const response = await fetch(`https://web-cars-7wxh.onrender.com/api/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosAtualizados),
    });

    const text = await response.text(); // captura resposta como texto bruto
    console.log('Status:', response.status);
    console.log('Resposta da API:', text);

    if (!response.ok) {
      throw new Error(`Erro ao editar carro: ${response.status}`);
    }

    return JSON.parse(text); // converte o texto manualmente
  } catch (error) {
    console.error('Erro ao editar carro:', error);
    throw error;
  }
}
