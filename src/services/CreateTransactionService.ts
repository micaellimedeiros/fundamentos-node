import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import transactionRouter from '../routes/transaction.routes';

interface Request {
  title: string;
  value: string;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transactionRouter;
  }
}

export default CreateTransactionService;
