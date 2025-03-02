import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { ERROR_MESSAGE } from '@/constants/constants';
import { ErrorMessageProps } from '@/types';

function ErrorMessage({ message = ERROR_MESSAGE }: ErrorMessageProps) {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default ErrorMessage;