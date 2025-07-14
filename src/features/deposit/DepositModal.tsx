import { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [pixCode, setPixCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  function generatePixCode() {
    const code = '00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-426614174000520400005303986540510.005802BR5913BAAS Platform6009Sao Paulo62070503***6304';
    setPixCode(code);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">Depósito PIX</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {!pixCode ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Clique no botão abaixo para gerar um código PIX para depósito
              </p>
              <button onClick={generatePixCode} className="btn-primary">
                Gerar Código PIX
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Código PIX Copia e Cola
                </label>
                <div className="relative">
                  <textarea
                    value={pixCode}
                    readOnly
                    className="input h-24 resize-none font-mono text-xs"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-primary"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-green-600 text-xs mt-1">Código copiado!</p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-medium text-blue-900 mb-2">Como usar:</h4>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Copie o código PIX acima</li>
                  <li>2. Abra seu app bancário</li>
                  <li>3. Escolha "PIX Copia e Cola"</li>
                  <li>4. Cole o código e confirme</li>
                </ol>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setPixCode('')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  Gerar Novo
                </button>
                <button onClick={onClose} className="flex-1 btn-primary">
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 