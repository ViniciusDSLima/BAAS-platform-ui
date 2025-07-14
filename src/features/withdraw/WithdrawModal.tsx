import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const predefinedAmounts = [50, 100, 200, 500];

export default function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  if (!isOpen) return null;

  function handleAmountSelect(amount: number) {
    setSelectedAmount(amount);
    setValue('amount', amount);
  }

  async function onSubmit(data: any) {
    setIsLoading(true);
    // Simulação de saque
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    reset();
    setSelectedAmount(null);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Saque</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selecione o valor
            </label>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-3 border rounded-lg text-center transition ${
                    selectedAmount === amount
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  R$ {amount.toFixed(2)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ou digite um valor personalizado
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
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setSelectedAmount(isNaN(value) ? null : value);
              }}
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
              {isLoading ? 'Processando...' : 'Sacar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 