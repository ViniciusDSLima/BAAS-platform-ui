import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  if (!isOpen) return null;

  async function onSubmit(data: any) {
    setIsLoading(true);
    // Simulação de transferência
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    reset();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Transferência</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destinatário (E-mail ou CPF)
            </label>
            <input
              type="text"
              className="input"
              placeholder="exemplo@email.com ou 123.456.789-00"
              {...register('recipient', { required: 'Destinatário obrigatório' })}
            />
            {errors.recipient && (
              <span className="text-red-500 text-xs">{errors.recipient.message as string}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor
            </label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              className="input"
              placeholder="0,00"
              {...register('amount', { 
                required: 'Valor obrigatório',
                min: { value: 0.01, message: 'Valor deve ser maior que zero' }
              })}
            />
            {errors.amount && (
              <span className="text-red-500 text-xs">{errors.amount.message as string}</span>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              {isLoading ? 'Processando...' : 'Transferir'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 