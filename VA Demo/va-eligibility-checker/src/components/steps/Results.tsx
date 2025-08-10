import React from 'react';
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  ArrowLeft, 
  Phone, 
  Calendar,
  FileText,
  ExternalLink,
  Award,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import type { EligibilityResult, FormData } from '../../types';

interface ResultsProps {
  result: EligibilityResult;
  formData: FormData;
  onBack: () => void;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ result, formData, onBack, onRestart }) => {
  const getStatusConfig = () => {
    switch (result.status) {
      case 'eligible':
        return {
          icon: CheckCircle,
          title: 'You Appear Eligible for VA Benefits',
          description: 'Based on your responses, you likely qualify for multiple VA benefits and services.',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-600',
          badgeColor: 'bg-green-100 text-green-800'
        };
      case 'maybe-eligible':
        return {
          icon: AlertCircle,
          title: 'You May Be Eligible for VA Benefits',
          description: 'You may qualify for some benefits, but additional documentation and review is needed.',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          iconColor: 'text-yellow-600',
          badgeColor: 'bg-yellow-100 text-yellow-800'
        };
      default:
        return {
          icon: XCircle,
          title: 'Limited Eligibility Found',
          description: 'Based on your responses, you may have limited eligibility, but options may still be available.',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-600',
          badgeColor: 'bg-red-100 text-red-800'
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <div className="step-container">
      {/* Status Header */}
      <Card className={`desktop-card mb-12 ${statusConfig.bgColor} ${statusConfig.borderColor} border-2`}>
        <CardContent className="p-12 text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${statusConfig.badgeColor}`}>
            <Award className="h-4 w-4 mr-2" />
            Assessment Complete
          </div>
          <StatusIcon className={`h-20 w-20 mx-auto mb-6 ${statusConfig.iconColor}`} />
          <h1 className="text-4xl lg:text-5xl font-bold text-va-gray-900 mb-4">
            {statusConfig.title}
          </h1>
          <p className="text-xl text-va-gray-700 max-w-3xl mx-auto">
            {statusConfig.description}
          </p>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Benefits Column */}
        {result.benefits.length > 0 && (
          <Card className="desktop-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="h-6 w-6 text-va-blue mr-3" />
                Potential Benefits ({result.benefits.length})
              </CardTitle>
              <p className="text-va-gray-600">Benefits you may be eligible for based on your service record</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-va-gray-50 rounded-lg hover:bg-va-blue/5 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-va-green mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-va-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Steps Column */}
        <Card className="desktop-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Calendar className="h-6 w-6 text-va-blue mr-3" />
              Next Steps ({result.nextSteps.length})
            </CardTitle>
            <p className="text-va-gray-600">Recommended actions to move forward with your benefits</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-va-blue text-white text-lg font-bold rounded-full flex items-center justify-center mr-4 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-lg text-va-gray-800 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Documentation Requirements */}
      <Card className="desktop-card mb-12">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <FileText className="h-6 w-6 text-va-blue mr-3" />
            Required Documentation
          </CardTitle>
          <p className="text-va-gray-600">Important documents you'll need for your benefits application</p>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-4">
            {result.documentation.map((doc, index) => (
              <div key={index} className="flex items-center p-3 bg-va-gray-50 rounded-lg">
                <FileText className="h-5 w-5 text-va-gray-400 mr-4 flex-shrink-0" />
                <span className="text-lg text-va-gray-800">{doc}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="desktop-card bg-va-blue text-white mb-12">
        <CardContent className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-va-blue-light mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
            Connect with a VA representative or Veterans Service Officer to get personalized assistance 
            with your benefits application and ensure you receive all the support you've earned.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button 
              variant="outline"
              className="desktop-button bg-white text-va-blue hover:bg-va-gray-100 border-white"
              onClick={() => window.open('https://va.gov', '_blank')}
            >
              <ExternalLink className="mr-3 h-5 w-5" />
              Visit VA.gov
            </Button>
            <Button 
              variant="outline"
              className="desktop-button bg-white text-va-blue hover:bg-va-gray-100 border-white"
              onClick={() => window.open('tel:1-800-827-1000', '_blank')}
            >
              <Phone className="mr-3 h-5 w-5" />
              Call VA Support
            </Button>
            <Button 
              variant="outline"
              className="desktop-button bg-white text-va-blue hover:bg-va-gray-100 border-white"
              onClick={() => window.open('https://www.va.gov/find-locations/', '_blank')}
            >
              <Calendar className="mr-3 h-5 w-5" />
              Find Local Office
            </Button>
            <Button 
              variant="outline"
              className="desktop-button bg-white text-va-blue hover:bg-va-gray-100 border-white"
              onClick={() => window.open('https://www.va.gov/disability/how-to-file-claim/', '_blank')}
            >
              <Clock className="mr-3 h-5 w-5" />
              Start Application
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={onBack} className="desktop-button">
          <ArrowLeft className="mr-3 h-5 w-5" />
          Back to Previous Step
        </Button>
        <Button onClick={onRestart} className="desktop-button">
          Start New Assessment
        </Button>
      </div>
    </div>
  );
}; 