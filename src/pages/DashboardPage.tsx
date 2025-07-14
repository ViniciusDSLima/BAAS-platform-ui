import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { DollarSign, Send, CreditCard, Download } from 'lucide-react';
import TransferModal from '../features/transfer/TransferModal';
import WithdrawModal from '../features/withdraw/WithdrawModal';
import DepositModal from '../features/deposit/DepositModal';

export default function DashboardPage() {
  const navigate = useNavigate();
  const [balance] = useState(5000.00); // Saldo simulado
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem('auth');
    navigate('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-primary">BAAS Platform</h1>
            <button onClick={handleLogout} className="btn-primary">Sair</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Saldo */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Saldo Disponível</h2>
              <p className="text-3xl font-bold text-primary">R$ {balance.toFixed(2)}</p>
            </div>
            <DollarSign className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Operações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Transferência */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Send className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-lg font-semibold">Transferência</h3>
            </div>
            <p className="text-gray-600 mb-4">Envie dinheiro para outros usuários usando e-mail ou CPF</p>
            <button 
              onClick={() => setIsTransferModalOpen(true)}
              className="btn-primary w-full"
            >
              Transferir
            </button>
          </div>

          {/* Saque */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <CreditCard className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-lg font-semibold">Saque</h3>
            </div>
            <p className="text-gray-600 mb-4">Simule um saque em caixa eletrônico</p>
            <button 
              onClick={() => setIsWithdrawModalOpen(true)}
              className="btn-primary w-full"
            >
              Sacar
            </button>
          </div>

          {/* Depósito */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <Download className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-lg font-semibold">Depósito</h3>
            </div>
            <p className="text-gray-600 mb-4">Gere um código PIX para receber depósitos</p>
            <button 
              onClick={() => setIsDepositModalOpen(true)}
              className="btn-primary w-full"
            >
              Depositar
            </button>
          </div>

          {/* Extrato */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-lg font-semibold">Extrato</h3>
            </div>
            <p className="text-gray-600 mb-4">Visualize seu histórico de transações</p>
            <button className="btn-primary w-full">Ver Extrato</button>
          </div>
        </div>
      </main>

      {/* Modais */}
      <TransferModal 
        isOpen={isTransferModalOpen} 
        onClose={() => setIsTransferModalOpen(false)} 
      />
      <WithdrawModal 
        isOpen={isWithdrawModalOpen} 
        onClose={() => setIsWithdrawModalOpen(false)} 
      />
      <DepositModal 
        isOpen={isDepositModalOpen} 
        onClose={() => setIsDepositModalOpen(false)} 
      />
    </div>
  );
} 