import React from 'react';
import { ArrowRight, Users, Shield, Heart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const vaBlue = '#005ea2';
  const vaGreen = '#00a91c';

  return (
    <div className="step-container">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          VA Benefits Eligibility Checker
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover what VA benefits you may be eligible for based on your service history, 
          disability status, and special recognitions. This comprehensive assessment takes just a few minutes.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="desktop-grid grid-cols-1 lg:grid-cols-3 mb-16">
        <Card className="desktop-card text-center group hover:border-blue-300">
          <CardHeader>
            <Shield className="h-16 w-16 mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ color: vaBlue }} />
            <CardTitle className="text-2xl">Service History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tell us about your military service including branch, years served, and discharge status 
              to determine your foundational eligibility.
            </p>
          </CardContent>
        </Card>

        <Card className="desktop-card text-center group hover:border-blue-300">
          <CardHeader>
            <Heart className="h-16 w-16 mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ color: vaBlue }} />
            <CardTitle className="text-2xl">Health Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg leading-relaxed">
              Share information about any service-connected disabilities or health conditions 
              that may qualify you for additional benefits.
            </p>
          </CardContent>
        </Card>

        <Card className="desktop-card text-center group hover:border-blue-300">
          <CardHeader>
            <Users className="h-16 w-16 mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ color: vaBlue }} />
            <CardTitle className="text-2xl">Special Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg leading-relaxed">
              Let us know about any special recognitions like Purple Heart or Medal of Honor 
              that provide priority access to benefits.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Preview */}
      <Card className="desktop-card mb-16 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-900">
            Potential Benefits You May Qualify For
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              'VA Healthcare & Priority Access',
              'Disability Compensation',
              'GI Bill Education Benefits',
              'VA Home Loan Guarantee',
              'Vocational Rehabilitation',
              'Burial & Cemetery Benefits'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" style={{ color: vaGreen }} />
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="desktop-card text-white" style={{ backgroundColor: vaBlue }}>
        <CardContent className="p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-8 text-xl leading-relaxed max-w-3xl mx-auto">
            This eligibility checker provides personalized recommendations based on your unique service record. 
            Complete the assessment to discover your benefits and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={onStart}
              variant="outline"
              size="lg"
              className="desktop-button bg-white text-blue-600 hover:bg-gray-100 border-white"
              style={{ color: vaBlue }}
            >
              Start Eligibility Assessment
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <div className="text-blue-200 text-base">
              ⏱️ Takes 3-5 minutes to complete
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-base">
          <strong>Important:</strong> This is a demonstration tool for informational purposes only. 
          For official benefit determinations, please contact the VA directly.
        </p>
      </div>
    </div>
  );
}; 