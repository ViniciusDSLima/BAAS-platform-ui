import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    // Simulação de autenticação
    localStorage.setItem('auth', 'true');
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary text-center mb-6">Entrar</h2>
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
              type="password"
              placeholder="Senha"
              className="input"
              {...register('password', { required: 'Senha obrigatória' })}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message as string}</span>}
          </div>
          <button type="submit" className="btn-primary w-full">Entrar</button>
          <p className="text-center text-sm text-gray-600">
            Não tem conta? <Link to="/register" className="text-primary underline hover:text-primary-dark">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
} 