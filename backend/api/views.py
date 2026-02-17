from rest_framework import viewsets, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from django.utils import timezone
from datetime import date
from .models import Trainer, Testimonial, Service, UserProfile, FoodLog
from .serializers import (
    TrainerSerializer, TestimonialSerializer, ServiceSerializer,
    UserProfileSerializer, FoodLogSerializer
)

class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class FoodLogViewSet(viewsets.ModelViewSet):
    queryset = FoodLog.objects.all()
    serializer_class = FoodLogSerializer
    
    @action(detail=False, methods=['get'])
    def today(self, request):
        """Get today's food logs for a session"""
        session_id = request.query_params.get('session_id')
        if not session_id:
            return Response(
                {'error': 'session_id is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        today = date.today()
        logs = FoodLog.objects.filter(session_id=session_id, date=today)
        serializer = self.get_serializer(logs, many=True)
        
        total_calories = sum(log.total_calories for log in logs)
        
        return Response({
            'logs': serializer.data,
            'total_calories': total_calories,
            'count': logs.count()
        })

@api_view(['GET'])
def home_data(request):
    """
    API endpoint that returns all data needed for the home page
    """
    trainers = Trainer.objects.all()[:3]  # Get top 3 trainers
    testimonials = Testimonial.objects.all()[:3]  # Get latest 3 testimonials
    services = Service.objects.filter(is_active=True)[:4]  # Get 4 active services
    
    data = {
        'trainers': TrainerSerializer(trainers, many=True).data,
        'testimonials': TestimonialSerializer(testimonials, many=True).data,
        'services': ServiceSerializer(services, many=True).data,
    }
    
    return Response(data)
