import React, { useState } from 'react';
import { useAccount, useReadContract, useWriteContract, useSignMessage } from 'wagmi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from 'lucide-react';
import { keccak256, toBytes } from 'viem';

const CONTRACT_ADDRESS = '0x757e671c15B54FCDD967E7B64d6fCfCF7eF51874';
const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "bool", name: "_vote", type: "bool" },
      { internalType: "bytes32", name: "_signatureHash", type: "bytes32" }
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getResults",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;

export default function VotingPage() {
  const [selectedVote, setSelectedVote] = useState<'yes' | 'no' | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  // Leer resultados del contrato
  const { data: results } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getResults',
    query: {
      refetchInterval: 5000, // Refresca cada 5 segundos
    }
  });

  // Preparar contrato para escritura
  const { writeContract } = useWriteContract()

  const handleVoteSelection = (vote: 'yes' | 'no') => {
    setSelectedVote(vote);
    setError('');
  };

  const handleVoteSubmission = async () => {
    if (!selectedVote || !isConnected || !address) return;
  
    try {
      setIsLoading(true);
      setError('');
  
      const message = JSON.stringify({
        vote: selectedVote === 'yes',
        timestamp: Date.now(),
        voter: address
      });
  
      const signature = await signMessageAsync({
        message,
        account: address
      });
  
      const signatureHash = keccak256(toBytes(signature));
  
      const hash = await writeContract({
        abi: CONTRACT_ABI,
        address: CONTRACT_ADDRESS as `0x${string}`,
        functionName: 'vote',
        args: [selectedVote === 'yes', signatureHash],
        chainId: 43113 // Avalanche Fuji Chain ID
        ,
        chain: undefined,
        account: address 
      });
  
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
      setSelectedVote(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar el voto');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Sistema de Votación en Blockchain
        </CardTitle>
        <p className="text-center text-gray-600">
          Por favor, vote "Sí" o "No" por la propuesta actual.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-4">
          <Button
            variant={selectedVote === 'yes' ? 'default' : 'outline'}
            onClick={() => handleVoteSelection('yes')}
            disabled={isLoading}
          >
            Sí
          </Button>
          <Button
            variant={selectedVote === 'no' ? 'default' : 'outline'}
            onClick={() => handleVoteSelection('no')}
            disabled={isLoading}
          >
            No
          </Button>
        </div>

        {!isConnected && (
          <div className="flex justify-center">
            <w3m-button />
          </div>
        )}

        {isConnected && (
          <Button
            className="w-full"
            onClick={handleVoteSubmission}
            disabled={!selectedVote || isLoading}
          >
            {isLoading ? 'Procesando...' : 'Enviar Voto'}
          </Button>
        )}

        {error && (
          <div className="flex items-center gap-2 text-red-500">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}

        {showConfirmation && (
          <div className="flex items-center gap-2 text-green-500 justify-center">
            <AlertCircle className="h-4 w-4" />
            Voto registrado con éxito
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <div className="w-full">
          <h3 className="text-lg font-semibold text-center mb-4">
            Conteo de Votos en Tiempo Real
          </h3>
          <div className="flex justify-around">
            <div className="text-center">
              <span className="font-bold">Sí: </span>
              {results ? results[0].toString() : '0'}
            </div>
            <div className="text-center">
              <span className="font-bold">No: </span>
              {results ? results[1].toString() : '0'}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}