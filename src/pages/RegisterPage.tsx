import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    // Simulação de cadastro
    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">Criar Conta</h2>
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              className="input"
              {...register('name', { required: 'Nome obrigatório' })}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message as string}</span>}
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="input"
              {...register('email', { required: 'E-mail obrigatório' })}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message as string}</span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="CPF"
              className="input"
              {...register('cpf', { required: 'CPF obrigatório' })}
            />
            {errors.cpf && <span className="text-red-500 text-xs mt-1 block">{errors.cpf.message as string}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="input"
              {...register('password', { required: 'Senha obrigatória' })}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message as string}</span>}
          </div>
          <button type="submit" className="btn-primary w-full">Cadastrar</button>
          <p className="text-center text-sm text-gray-600">
            Já tem conta? <Link to="/login" className="text-primary underline hover:text-primary-dark">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
} 