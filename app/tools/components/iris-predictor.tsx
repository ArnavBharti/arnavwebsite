"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

interface FormData {
  sepalLengthCm: string;
  sepalWidthCm: string;
  petalLengthCm: string;
  petalWidthCm: string;
}

interface PredictionResponse {
  species: string;
}

const IrisPredictor = () => {
  const [formData, setFormData] = useState<FormData>({
    sepalLengthCm: "",
    sepalWidthCm: "",
    petalLengthCm: "",
    petalWidthCm: "",
  });

  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePredict = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://143.110.180.130/mlmodel/predict_iris_perceptron",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sepalLengthCm: parseFloat(formData.sepalLengthCm),
            sepalWidthCm: parseFloat(formData.sepalWidthCm),
            petalLengthCm: parseFloat(formData.petalLengthCm),
            petalWidthCm: parseFloat(formData.petalWidthCm),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(JSON.stringify(data));
      }

      setPrediction(data as PredictionResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // This prevents the default form submission
    handlePredict(); // Call our custom predict function
  };

  const handleReset = () => {
    setFormData({
      sepalLengthCm: "",
      sepalWidthCm: "",
      petalLengthCm: "",
      petalWidthCm: "",
    });
    setPrediction(null);
    setError(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto animate-in fade-in duration-500">
      <CardHeader>
        <CardTitle>Iris Species Predictor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="animate-in slide-in-from-left duration-300">
            <Input
              type="number"
              step="0.1"
              name="sepalLengthCm"
              placeholder="Sepal Length (cm)"
              value={formData.sepalLengthCm}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          <div className="animate-in slide-in-from-left duration-300 delay-100">
            <Input
              type="number"
              step="0.1"
              name="sepalWidthCm"
              placeholder="Sepal Width (cm)"
              value={formData.sepalWidthCm}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          <div className="animate-in slide-in-from-left duration-300 delay-200">
            <Input
              type="number"
              step="0.1"
              name="petalLengthCm"
              placeholder="Petal Length (cm)"
              value={formData.petalLengthCm}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          <div className="animate-in slide-in-from-left duration-300 delay-300">
            <Input
              type="number"
              step="0.1"
              name="petalWidthCm"
              placeholder="Petal Width (cm)"
              value={formData.petalWidthCm}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>

          <div className="flex gap-4 animate-in slide-in-from-bottom duration-500 delay-500">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Predict Species
            </Button>
            {prediction && (
              <Button
                type="button"
                onClick={handleReset}
                variant="outline"
                className="w-full animate-in fade-in duration-300"
              >
                New Prediction
              </Button>
            )}
          </div>
        </form>

        {error && (
          <Alert
            variant="destructive"
            className="mt-4 animate-in fade-in slide-in-from-top duration-300"
          >
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {prediction && (
          <Alert className="mt-4 animate-in fade-in slide-in-from-bottom duration-300">
            <AlertDescription>
              Predicted Species: {prediction.species}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default IrisPredictor;
